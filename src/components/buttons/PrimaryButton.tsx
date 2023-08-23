interface Props {
    text: string,
}

export default function PrimaryButton(props: Props)
{
    return (
        <button className={"w-full bg-primary py-3 px-2 rounded-xl text-white"}>
            {props.text}
        </button>
    )
}