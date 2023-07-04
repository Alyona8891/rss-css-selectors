const screenplays = {
    level1: {
        title: 'Select the plates',
        help: 'plate',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: 'strobe',
                id: null,
                child: null,
            },
            {
                tag: 'plate',
                class: 'strobe',
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
                        inner: '',
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
    level2: {
        title: 'Select the bento',
        help: 'bento',
        paramsBlockPlates: [
            {
                tag: 'bento',
                class: 'strobe',
                id: null,
                child: null,
            },
            {
                tag: 'plate',
                class: 'normal',
                id: null,
                child: null,
            },
            {
                tag: 'bento',
                class: 'strobe',
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
        title: 'Select the plates',
        help: 'plate',
        paramsBlockPlates: [
            {
                tag: 'bento',
                class: 'strobe',
                id: null,
                child: [
                    {
                        tag: 'plate',
                        class: 'strobe',
                        id: null,
                        child: null,
                    },
                ],
            },
            {
                tag: 'bento',
                class: 'strobe',
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
    level4: {
        title: 'Select the plates',
        help: 'plate',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: 'strobe',
                id: null,
                child: null,
            },
            {
                tag: 'plate',
                class: 'strobe',
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
                        selector: 'class="bi"',
                        inner: '',
                    },
                    {
                        tag: 'plate',
                        selector: 'id="hi"',
                        inner: [
                            {
                                tag: 'bento',
                                inner: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    level5: {
        title: 'Select the plates',
        help: 'plate',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: 'strobe',
                id: null,
                child: null,
            },
            {
                tag: 'plate',
                class: 'strobe',
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
                        selector: 'class="bi"',
                        inner: '',
                    },
                    {
                        tag: 'plate',
                        selector: 'id="hi"',
                        inner: [
                            {
                                tag: 'bento',
                                inner: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    level6: {
        title: 'Select the plates',
        help: 'plate',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: 'strobe',
                id: null,
                child: null,
            },
            {
                tag: 'plate',
                class: 'strobe',
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
                        selector: 'class="bi"',
                        inner: '',
                    },
                    {
                        tag: 'plate',
                        selector: 'id="hi"',
                        inner: [
                            {
                                tag: 'bento',
                                inner: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    level7: {
        title: 'Select the plates',
        help: 'plate',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: 'strobe',
                id: null,
                child: null,
            },
            {
                tag: 'plate',
                class: 'strobe',
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
                        selector: 'class="bi"',
                        inner: '',
                    },
                    {
                        tag: 'plate',
                        selector: 'id="hi"',
                        inner: [
                            {
                                tag: 'bento',
                                inner: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    level8: {
        title: 'Select the plates',
        help: 'plate',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: 'strobe',
                id: null,
                child: null,
            },
            {
                tag: 'plate',
                class: 'strobe',
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
                        selector: 'class="bi"',
                        inner: '',
                    },
                    {
                        tag: 'plate',
                        selector: 'id="hi"',
                        inner: [
                            {
                                tag: 'bento',
                                inner: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    level9: {
        title: 'Select the plates',
        help: 'plate',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: 'strobe',
                id: null,
                child: null,
            },
            {
                tag: 'plate',
                class: 'strobe',
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
                        selector: 'class="bi"',
                        inner: '',
                    },
                    {
                        tag: 'plate',
                        selector: 'id="hi"',
                        inner: [
                            {
                                tag: 'bento',
                                inner: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    level10: {
        title: 'Select the plates',
        help: 'plate',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: 'strobe',
                id: null,
                child: null,
            },
            {
                tag: 'plate',
                class: 'strobe',
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
                        selector: 'class="bi"',
                        inner: '',
                    },
                    {
                        tag: 'plate',
                        selector: 'id="hi"',
                        inner: [
                            {
                                tag: 'bento',
                                inner: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

export default screenplays;
