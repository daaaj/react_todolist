import { Children } from 'react';
import styled from 'styled-components';
// style
function Button({ className, onClick, children }) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}
export default Button;
