import styled from 'styled-components';

export default styled.div`
    margin: ${({ noMargin }) => noMargin ? undefined : '10px 0 10px'};

    > label {
        margin: 0;
        font-weight: bold;
        color: ${({ theme }) => theme.textColor.secondary};

        + * {
            margin-top: 4px;
        }
    }

    input, textarea, .rw-widget-container, .rw-multiselect, .rw-list, .rw-dropdown-list {
        border: ${({ theme }) => theme.border.primary};
        border-radius: 5px;
        font-size: 1em;
        box-sizing: border-box;

        ${({ theme, error }) => error ? `border-color: ${theme.color.error}` : undefined};
    }

    input, textarea {
        padding: ${({ theme }) => theme.padding.input};
    }

    .rw-widget-input, .rw-input-reset, .rw-filter-input {
        border: none;
        box-shadow: none;
    }
`;
