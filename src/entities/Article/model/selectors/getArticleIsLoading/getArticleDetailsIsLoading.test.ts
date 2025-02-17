import { getArticleDetailsIsLoading } from './getArticleDetailsIsLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleDetailsIsLoading.test', () => {
    test('should return true while loading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(
            undefined
        );
    });
});
