import styled from 'styled-components';
// style
function Button({ className, onClick, name }) {
    return (
        <button className={className} onClick={onClick}>
            {name}
        </button>
    );
}
export default Button;
