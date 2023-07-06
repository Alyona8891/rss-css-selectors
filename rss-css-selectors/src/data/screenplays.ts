import { Screenplay } from '../types/types';

const screenplays: Screenplay = {
    level1: {
        title: 'Select the bento boxes',
        help: 'bento',
        parametersElements: [
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
        parametersHtmlLines: [
            {
                tag: 'div',
                selector: 'class="table"',
                innerElement: [
                    {
                        tag: 'bento',
                        selector: '',
                        innerElement: '',
                    },
                    {
                        tag: 'bento',
                        selector: '',
                        innerElement: '',
                    },
                ],
            },
        ],
    },
    level2: {
        title: 'Select the plate',
        help: 'plate',
        parametersElements: [
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
        parametersHtmlLines: [
            {
                tag: 'div',
                selector: 'class="table"',
                innerElement: [
                    {
                        tag: 'bento',
                        selector: '',
                        innerElement: '',
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        innerElement: '',
                    },
                    {
                        tag: 'bento',
                        selector: '',
                        innerElement: '',
                    },
                ],
            },
        ],
    },
    level3: {
        title: 'Select the yellow bento boxes',
        help: '.yellow',
        parametersElements: [
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
        parametersHtmlLines: [
            {
                tag: 'div',
                selector: 'class="table"',
                innerElement: [
                    {
                        tag: 'bento',
                        selector: '',
                        innerElement: '',
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        innerElement: '',
                    },
                    {
                        tag: 'bento',
                        selector: 'class="yellow"',
                        innerElement: '',
                    },
                ],
            },
        ],
    },
    level4: {
        title: 'Select the plate on the yellow bento box',
        help: '.yellow plate',
        parametersElements: [
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
        parametersHtmlLines: [
            {
                tag: 'div',
                selector: 'class="table"',
                innerElement: [
                    {
                        tag: 'bento',
                        selector: '',
                        innerElement: [
                            {
                                tag: 'plate',
                                selector: '',
                                innerElement: '',
                            },
                        ],
                    },
                    {
                        tag: 'bento',
                        selector: 'class="yellow"',
                        innerElement: [
                            {
                                tag: 'plate',
                                selector: '',
                                innerElement: '',
                            },
                        ],
                    },
                    {
                        tag: 'bento',
                        selector: '',
                        innerElement: '',
                    },
                ],
            },
        ],
    },
    level5: {
        title: 'Select the wormy apple',
        help: '#wormy',
        parametersElements: [
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
        parametersHtmlLines: [
            {
                tag: 'div',
                selector: 'class="table"',
                innerElement: [
                    {
                        tag: 'plate',
                        selector: '',
                        innerElement: [
                            {
                                tag: 'apple',
                                selector: '',
                                innerElement: '',
                            },
                        ],
                    },
                    {
                        tag: 'apple',
                        selector: 'id="wormy"',
                        innerElement: '',
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        innerElement: [
                            {
                                tag: 'apple',
                                selector: '',
                                innerElement: '',
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
        parametersElements: [
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
        parametersHtmlLines: [
            {
                tag: 'div',
                selector: 'class="table"',
                innerElement: [
                    {
                        tag: 'plate',
                        selector: '',
                        innerElement: [
                            {
                                tag: 'apple',
                                selector: '',
                                innerElement: '',
                            },
                        ],
                    },
                    {
                        tag: 'apple',
                        selector: 'id="wormy"',
                        innerElement: '',
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        innerElement: [
                            {
                                tag: 'apple',
                                selector: '',
                                innerElement: '',
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
        parametersElements: [
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
        parametersHtmlLines: [
            {
                tag: 'div',
                selector: 'class="table"',
                innerElement: [
                    {
                        tag: 'plate',
                        selector: '',
                        innerElement: [
                            {
                                tag: 'apple',
                                selector: '',
                                innerElement: [
                                    {
                                        tag: 'worm',
                                        selector: '',
                                        innerElement: '',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'worm',
                        selector: '',
                        innerElement: '',
                    },
                    {
                        tag: 'bento',
                        selector: '',
                        innerElement: '',
                    },
                ],
            },
        ],
    },
    level8: {
        title: 'Select the worm on the table',
        help: '.table>worm',
        parametersElements: [
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
        parametersHtmlLines: [
            {
                tag: 'div',
                selector: 'class="table"',
                innerElement: [
                    {
                        tag: 'plate',
                        selector: '',
                        innerElement: [
                            {
                                tag: 'apple',
                                selector: '',
                                innerElement: [
                                    {
                                        tag: 'worm',
                                        selector: '',
                                        innerElement: '',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'worm',
                        selector: '',
                        innerElement: '',
                    },
                    {
                        tag: 'bento',
                        selector: '',
                        innerElement: '',
                    },
                ],
            },
        ],
    },
    level9: {
        title: 'Select the central worm',
        help: '.table:nth-child(1)>worm',
        parametersElements: [
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
        parametersHtmlLines: [
            {
                tag: 'div',
                selector: 'class="table"',
                innerElement: [
                    {
                        tag: 'apple',
                        selector: '',
                        innerElement: [
                            {
                                tag: 'worm',
                                selector: '',
                                innerElement: '',
                            },
                        ],
                    },
                    {
                        tag: 'apple',
                        selector: '',
                        innerElement: [
                            {
                                tag: 'worm',
                                selector: '',
                                innerElement: '',
                            },
                        ],
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        innerElement: '',
                    },
                ],
            },
        ],
    },
    level10: {
        title: 'Clean the table',
        help: '*',
        parametersElements: [
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
        parametersHtmlLines: [
            {
                tag: 'div',
                selector: 'class="table"',
                innerElement: [
                    {
                        tag: 'apple',
                        selector: '',
                        innerElement: [
                            {
                                tag: 'worm',
                                selector: '',
                                innerElement: '',
                            },
                        ],
                    },
                    {
                        tag: 'apple',
                        selector: '',
                        innerElement: [
                            {
                                tag: 'worm',
                                selector: '',
                                innerElement: '',
                            },
                        ],
                    },
                    {
                        tag: 'plate',
                        selector: '',
                        innerElement: '',
                    },
                ],
            },
        ],
    },
};

export default screenplays;
