import PrimaryButton from "../components/buttons/PrimaryButton";
import PrimaryInput from "../components/inputs/PrimaryInput";

export default function Login() {
    return (
        <div className={"flex flex-col h-screen w-screen justify-center items-center px-48 md:px-32 sm:px-32 "}>
            <h1 className={"text-2xl font-bold mb-3"}>Login Page</h1>
            <PrimaryInput/>
            <PrimaryInput name={"password"} placeHolder={"Enter your password"}/>
            <PrimaryButton text={"Login"}/>
            <div className={"text-[18px]"}> Don't have an account? <a href={"#"} className={"underline text-primary"}>Sign up</a></div>
        </div>
    );
}