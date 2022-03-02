import tw from "tailwind-styled-components"


export const Input = tw.input`
    p-1
    rounded
    w-full
    mb-5
    disabled:opacity-75 disabled:transform:none disabled:transition-none disabled:cursor-not-allowed
    border
    border-black


    text-gray-800
    dark:text-gray-300
    dark:bg-gray-900
`;