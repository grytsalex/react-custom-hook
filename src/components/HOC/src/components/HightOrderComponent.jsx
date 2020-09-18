import React, {useCallback, useEffect} from "react";
import ClipboardJS from 'clipboard';

const withDataCopy = (PassedComponent) => props => {
    const { text, selector, } = props
    const initializeClipboardField = useCallback(
        elements => {
            elements.forEach(element => {
                const clipboard = new ClipboardJS(element);

                clipboard.on('success', function(e) {
                    e.clearSelection();

                    console.log(`${text}`)
                });
            });
        },
        [],
    );
    useEffect(() => {
        initializeClipboardField([`${selector}`]);
    }, [initializeClipboardField]);

    return <PassedComponent {...props}/>
};

export default withDataCopy;