module.exports = {
    projects:[
        {
            rootDir: './packages/api/server',
            displayName: 'api',
            testEnvironment: 'jest-environment-node',
            testMatch: ['<rootDir>/__tests__/todo-list-item.test.js']
        },
        
    ],
    verbose: true,
    watchman: true
}


/*

{
            rootDir: './packages/ui',
            displayName: 'ui',
            testEnvironment: 'jest-environment-jsdom',
            transform: {
                "^.+\\.tsx?$": ["ts-jest", {
                    tsConfig:'<rootDir>/todo_list/tsconfig.json'
                }
            ]
            },
            testMatch: ['<rootDir>/ADD TEST MATCH BACK IN/.test.tsx'],
            preset: 'ts-jest'
        }

*/