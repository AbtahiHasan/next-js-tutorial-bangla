

const Button = ({text, action, type}) => {
    return (
        <button type={type} onClick={action}>
            {text}
        </button>
    );
};

export default Button;