interface Props {
    name?: string
    placeHolder?: string,
}

export default function PrimaryInput({name = 'email', placeHolder = 'Enter your email'}: Props) {
    return (
        <input id={name}
               name={name}
               type={name}
               className={"w-full rounded-xl py-3 px-2 bg-lightGrey mb-3 border-0"}
               placeholder={placeHolder}/>
    )
}