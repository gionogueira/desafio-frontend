function InputLogin() {
    return (
        <div>
            <label className="block">
                <span className="text-black2 font-bold text-xl">E-mail</span>
                <input
                    type="email"
                    className="mt-1 w-full block rounded-lg bg-white3 border-none focus:border-none focus:ring-0"
                    placeholder="@gmail.com"
                />
            </label>
        </div>
    );
}

export default InputLogin;
