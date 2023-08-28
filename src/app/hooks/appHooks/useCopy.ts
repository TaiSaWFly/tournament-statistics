import useSvgIcon from "./useSvgIcon";

const useCopy = () => {
    const { Copy: CopyIcon } = useSvgIcon();

    const handleCopyToClipBoard = (copyText: string) =>
        navigator.clipboard.writeText(copyText);

    return { CopyIcon, handleCopyToClipBoard };
};

export default useCopy;
