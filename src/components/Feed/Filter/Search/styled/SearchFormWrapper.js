import styled from 'styled-components';

export default styled.div`
    display: flex;
    position: relative;

    > * + * {
        margin-left: 10px;
    }
`;
