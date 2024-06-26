'use client';
import { useState, createContext } from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darktheme from './darktheme';
import theme from './theme';


export const ThemeContext = createContext({
    switchColorMode: () => { },
});

export default function ThemeProviderWrapper(props) {
    const [mode, setMode] = useState('dark');
    const { options, children } = props;
    const [{ cache, flush }] = useState(() => {
        const cache = createCache(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted = [];
        cache.insert = (...args) => {
            const serialized = args[1];
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name);
            }
            return prevInsert(...args);
        };
        const flush = () => {
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return { cache, flush };
    });


    const switchColorMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    useServerInsertedHTML(() => {
        const names = flush();
        if (names.length === 0) {
            return null;
        }
        let styles = '';
        for (const name of names) {
            styles += cache.inserted[name];
        }
        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(' ')}`}
                dangerouslySetInnerHTML={{
                    __html: styles,
                }}
            />
        );
    });
    return (
        <CacheProvider value={cache}>
            <ThemeContext.Provider value={{ switchColorMode }}>
                <ThemeProvider theme={mode == "dark" ? darktheme : theme}>
                    <CssBaseline enableColorScheme />
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        </CacheProvider>
    );
}