const screenplays = {
    level1: {
        title: 'Select the plates',
        paramsBlockPlates: [
            {
                tag: 'plate',
                class: 'strobe',
                child: null,
            },
            {
                tag: 'plate',
                class: 'strobe',
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
