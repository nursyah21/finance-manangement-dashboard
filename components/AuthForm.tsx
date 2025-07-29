
const AuthForm = ({
    type
}: AuthFormProps) => {
    return (
        <div>
            {type === 'sign-in' ? 'Sign up' : 'Sign in'}
        </div>
    )
}

export default AuthForm