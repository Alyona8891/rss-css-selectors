const screenplays = {
    level1: {
        title: 'Select the bento boxes',
        help: 'bento',
        paramsBlockPlates: [
            {
                tag: 'bento',
                class: ['strobe'],
                id: null,
                child: null,
            },
            {
                tag: 'bento',
                class: ['strobe'],
                id: null,
                child: null,
            },
        ],
        paramsBlockHtml: [
            {
                tag: 'div',
                selector: 'class="table"',
                inner: [
                    {
                        tag: 'bento',
                        selector: '',
                        inner: '',
                    },
                    {
                        tag: 'bento',
                        selector: '',
                        inner: '',
                    },
                ],
            },
        ],
    },
    level2: {
        title: 'Select the plate',
        help: 'plate',
        paramsBlockPlates: [
            {
                tag: 'bento',
                class: ['normal'],
                id: null,
                child: null,
            },
            {
                tag: 'plate',
                class: ['strobe'],
                id: null,
                child: null,
            },
            {
                tag: 'bento',
                class: ['normal'],
                id: null,
                child: null,
            },
        ],
        paramsBlockHtml: [
            {
                tag: 'div',
                selector: 'class="table"',
                inner: [
                    {
                        tag: 'bento',
                        selector: '',
                        inner: '',
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        inner: '',
                    },
                    {
                        tag: 'bento',
                        selector: '',
                        inner: '',
                    },
                ],
            },
        ],
    },
    level3: {
        title: 'Select the yellow bento boxes',
        help: '.yellow',
        paramsBlockPlates: [
            {
                tag: 'bento',
                class: ['normal'],
                id: null,
                child: null,
            },
            {
                tag: 'plate',
                class: ['normal'],
                id: null,
                child: null,
            },
            {
                tag: 'bento',
                class: ['strobe', 'yellow'],
                id: null,
                child: null,
            },
        ],
        paramsBlockHtml: [
            {
                tag: 'div',
                selector: 'class="table"',
                inner: [
                    {
                        tag: 'bento',
                        selector: '',
                        inner: '',
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        inner: '',
                    },
                    {
                        tag: 'bento',
                        selector: 'class="yellow"',
                        inner: '',
                    },
                ],
            },
        ],
    },
    level4: {
        title: 'Select the plate on the yellow bento box',
        help: '.yellow plate',
        paramsBlockPlates: [
            {
                tag: 'bento',
                class: ['normal'],
                id: null,
                child: [
                    {
                        tag: 'plate',
                        class: ['normal'],
                        id: null,
                        child: null,
                    },
                ],
            },
            {
                tag: 'bento',
                class: ['yellow'],
                id: null,
                child: [
                    {
                        tag: 'plate',
                        class: ['strobe'],
                        id: null,
                        child: null,
                    },
                ],
            },
            {
                tag: 'bento',
                class: ['normal'],
                id: null,
                child: null,
            },
        ],
        paramsBlockHtml: [
            {
                tag: 'div',
                selector: 'class="table"',
                inner: [
                    {
                        tag: 'bento',
                        selector: '',
                        inner: [
                            {
                                tag: 'plate',
                                selector: '',
                                inner: '',
                            },
                        ],
                    },
                    {
                        tag: 'bento',
                        selector: 'class="yellow"',
                        inner: [
                            {
                                tag: 'plate',
                                selector: '',
                                inner: '',
                            },
                        ],
                    },
                    {
                        tag: 'bento',
                        selector: '',
                        inner: '',
                    },
                ],
            },
        ],
    },
    level5: {
        title: 'Select the wormy apple',
        help: '#wormy',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: ['normal'],
                id: null,
                child: [
                    {
                        tag: 'apple',
                        class: ['normal'],
                        id: null,
                        child: null,
                    },
                ],
            },
            {
                tag: 'apple',
                class: ['strobe'],
                id: 'wormy',
                child: null,
            },
            {
                tag: 'plate',
                class: ['normal'],
                id: null,
                child: [
                    {
                        tag: 'apple',
                        class: ['normal'],
                        id: null,
                        child: null,
                    },
                ],
            },
        ],
        paramsBlockHtml: [
            {
                tag: 'div',
                selector: 'class="table"',
                inner: [
                    {
                        tag: 'plate',
                        selector: '',
                        inner: [
                            {
                                tag: 'apple',
                                selector: '',
                                inner: '',
                            },
                        ],
                    },
                    {
                        tag: 'apple',
                        selector: 'id="wormy"',
                        inner: '',
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        inner: [
                            {
                                tag: 'apple',
                                selector: '',
                                inner: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    level6: {
        title: 'Select the apple on the right side of the table',
        help: '.table :last-child > apple',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: ['normal'],
                id: null,
                child: [
                    {
                        tag: 'apple',
                        class: ['normal'],
                        id: null,
                        child: null,
                    },
                ],
            },
            {
                tag: 'apple',
                class: ['normal'],
                id: 'wormy',
                child: null,
            },
            {
                tag: 'plate',
                class: ['normal'],
                id: null,
                child: [
                    {
                        tag: 'apple',
                        class: ['strobe'],
                        id: null,
                        child: null,
                    },
                ],
            },
        ],
        paramsBlockHtml: [
            {
                tag: 'div',
                selector: 'class="table"',
                inner: [
                    {
                        tag: 'plate',
                        selector: '',
                        inner: [
                            {
                                tag: 'apple',
                                selector: '',
                                inner: '',
                            },
                        ],
                    },
                    {
                        tag: 'apple',
                        selector: 'id="wormy"',
                        inner: '',
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        inner: [
                            {
                                tag: 'apple',
                                selector: '',
                                inner: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    level7: {
        title: 'Select the worm on the apple',
        help: 'plate apple worm',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: ['normal'],
                id: null,
                child: [
                    {
                        tag: 'apple',
                        class: ['normal'],
                        id: null,
                        child: [
                            {
                                tag: 'worm',
                                class: ['strobe'],
                                id: null,
                                child: null,
                            },
                        ],
                    },
                ],
            },
            {
                tag: 'worm',
                class: ['normal'],
                id: null,
                child: null,
            },
            {
                tag: 'bento',
                class: ['normal'],
                id: null,
                child: null,
            },
        ],
        paramsBlockHtml: [
            {
                tag: 'div',
                selector: 'class="table"',
                inner: [
                    {
                        tag: 'plate',
                        selector: '',
                        inner: [
                            {
                                tag: 'apple',
                                selector: '',
                                inner: [
                                    {
                                        tag: 'worm',
                                        selector: '',
                                        inner: '',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'worm',
                        selector: '',
                        inner: '',
                    },
                    {
                        tag: 'bento',
                        selector: '',
                        inner: '',
                    },
                ],
            },
        ],
    },
    level8: {
        title: 'Select the worm on the table',
        help: '.table>worm',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: ['normal'],
                id: null,
                child: [
                    {
                        tag: 'apple',
                        class: ['normal'],
                        id: null,
                        child: [
                            {
                                tag: 'worm',
                                class: ['normal'],
                                id: null,
                                child: null,
                            },
                        ],
                    },
                ],
            },
            {
                tag: 'worm',
                class: ['strobe'],
                id: null,
                child: null,
            },
            {
                tag: 'bento',
                class: ['normal'],
                id: null,
                child: null,
            },
        ],
        paramsBlockHtml: [
            {
                tag: 'div',
                selector: 'class="table"',
                inner: [
                    {
                        tag: 'plate',
                        selector: '',
                        inner: [
                            {
                                tag: 'apple',
                                selector: '',
                                inner: [
                                    {
                                        tag: 'worm',
                                        selector: '',
                                        inner: '',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'worm',
                        selector: '',
                        inner: '',
                    },
                    {
                        tag: 'bento',
                        selector: '',
                        inner: '',
                    },
                ],
            },
        ],
    },
    level9: {
        title: 'Select the central worm',
        help: '.table:nth-child(1)>worm',
        paramsBlockPlates: [
            {
                tag: 'apple',
                class: ['normal'],
                id: null,
                child: [
                    {
                        tag: 'worm',
                        class: ['normal'],
                        id: null,
                        child: null,
                    },
                ],
            },
            {
                tag: 'apple',
                class: ['normal'],
                id: null,
                child: [
                    {
                        tag: 'worm',
                        class: ['strobe'],
                        id: null,
                        child: null,
                    },
                ],
            },
            {
                tag: 'plate',
                class: ['normal'],
                id: null,
                child: null,
            },
        ],
        paramsBlockHtml: [
            {
                tag: 'div',
                selector: 'class="table"',
                inner: [
                    {
                        tag: 'apple',
                        selector: '',
                        inner: [
                            {
                                tag: 'worm',
                                selector: '',
                                inner: '',
                            },
                        ],
                    },
                    {
                        tag: 'apple',
                        selector: '',
                        inner: [
                            {
                                tag: 'worm',
                                selector: '',
                                inner: '',
                            },
                        ],
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        inner: '',
                    },
                ],
            },
        ],
    },
    level10: {
        title: 'Clean the table',
        help: '*',
        paramsBlockPlates: [
            {
                tag: 'apple',
                class: ['strobe'],
                id: null,
                child: [
                    {
                        tag: 'worm',
                        class: ['strobe'],
                        id: null,
                        child: null,
                    },
                ],
            },
            {
                tag: 'apple',
                class: ['strobe'],
                id: null,
                child: [
                    {
                        tag: 'worm',
                        class: ['strobe'],
                        id: null,
                        child: null,
                    },
                ],
            },
            {
                tag: 'plate',
                class: ['strobe'],
                id: null,
                child: null,
            },
        ],
        paramsBlockHtml: [
            {
                tag: 'div',
                selector: 'class="table"',
                inner: [
                    {
                        tag: 'apple',
                        selector: '',
                        inner: [
                            {
                                tag: 'worm',
                                selector: '',
                                inner: '',
                            },
                        ],
                    },
                    {
                        tag: 'apple',
                        selector: '',
                        inner: [
                            {
                                tag: 'worm',
                                selector: '',
                                inner: '',
                            },
                        ],
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        inner: '',
                    },
                ],
            },
        ],
    },
};

export default screenplays;
