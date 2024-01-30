import Redis, { RedisOptions } from 'ioredis';
import vairable from './variable';

function getRedisConfiguration() {
    return configuration.redis;
}

function createRedisInstance(config = getRedisConfiguration()) {
    try {
        const options = {
            host: config.host,
            lazyConnect: true,
            showFriendlyErrorStack: true,
            enableAutoPipelining: true,
            maxRetriesPerRequest: 0,
            retryStrategy: (times) => {
                if (times > 3) {
                    throw new Error(`[Redis] Could not connect after ${times} attempts`);
                }

                return Math.min(times * 200, 1000);
            },
        };

        if (config.port) {
            options.port = config.port;
        }

        if (config.password) {
            options.password = config.password;
        }

        const redis = new Redis(options);

        redis.on('error', (error) => {
            console.warn('[Redis] Error connecting', error);
        });

        return redis;
    } catch (e) {
        throw new Error(`[Redis] Could not create a Redis instance`);
    }
}

// You can use the createRedisInstance function as needed in your JavaScript code.
