import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Input.propTypes = {
    error: PropTypes.func,
    disabled: PropTypes.func,
    helperText: PropTypes.string,
    startIcon: PropTypes.func,
    endIcon: PropTypes.func,
    value: PropTypes.string,
    size: PropTypes.string,
    fullWidth: PropTypes.func,
    multiline: PropTypes.func,
    row: PropTypes.string
};

Input.defaultProps = {
    error: null,
    disabled: null,
    helperText: '',
    startIcon: null,
    endIcon: null,
    value: '',
    size: '',
    fullWidth: null,
    multiline: null,
    row: ''
};

const SIZES = [
    'sm',
    'md'
];

function Input(props) {
    const {
        error,
        disabled,
        helperText,
        startIcon,
        endIcon,
        value,
        size,
        fullWidth,
        multiline,
        row } = props;

    const inputError = error !== null ? ('input--error') : '';
    const inputDisabled = disabled !== null ? true : false;
    const inputHelperText = helperText !== '' ? ('input--helperText') : '';
    const inputStartIcon = startIcon !== null ? ('input--startIcon') : '';
    const inputEndIcon = endIcon != null ? ('input--endIcon') : '';
    const inputValue = value !== '' ? ('input--value') : '';
    const inputSize = SIZES.includes(size) ? ('input--' + size) : 'input--md';
    const inputFullWidth = fullWidth !== null ? ('input--fullWidth') : '';
    const inputMultiline = multiline !== null ? ('input--multiline') : '';
    const inputRow = row !== '' ? row : '4';

    const [contentValue, setContentValue] = useState(value);

    function handleChange(e) {
        setContentValue(e.target.value);
    }

    return (
        <div className={
            `input ${inputError} ${inputStartIcon} ${inputEndIcon} ${inputValue} ${inputSize} ${inputFullWidth} ${inputMultiline}`}>
            {
                error !== null &&
                <input
                    type="text"
                    placeholder="Placeholder"
                    value={contentValue}
                    className="input-text"
                    onChange={(e) => handleChange(e)}
                    disabled={inputDisabled} />

            }
            <label className="input-label">Label</label>
            {
                multiline == null && error === null &&
                <input
                    type="text"
                    placeholder="Placeholder"
                    value={contentValue}
                    onChange={(e) => handleChange(e)}
                    className="input-text"
                    disabled={inputDisabled} />
            }
            {
                multiline !== null && error === null &&
                <textarea
                    className="input-multiline"
                    rows={inputRow}
                    value={contentValue}
                    onChange={(e) => handleChange(e)}
                    placeholder="Placeholder"></textarea>
            }
            {
                startIcon !== null && error === null && <span className="material-icons">call</span>
            }
            {
                endIcon !== null && error === null && <span className="material-icons">lock</span>
            }
            {
                inputHelperText !== '' && error === null && <span className="input-helperText">Some interesting text</span>
            }
            {
                inputHelperText !== '' && error !== null && <span className="input-helperText">Some interesting text</span>
            }
        </div >

    );
}

export default Input;