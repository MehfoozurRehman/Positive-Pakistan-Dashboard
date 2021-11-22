import React from "react";
import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function InputBox({
  svg,
  placeholder,
  required,
  type,
  variant,
  options,
  style,
}) {
  if (variant === "select") {
    return (
      <div className="input__box" style={style}>
        {svg}
        <Select
          options={options}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  } else if (variant === "checkbox") {
    return (
      <div className="input__box__checkbox" style={style}>
        <input
          className="checkbox"
          id={"input__box__checkbox" + placeholder}
          type="checkbox"
          value={placeholder}
          name={placeholder}
        />
        <label htmlFor={"input__box__checkbox" + placeholder}>
          {placeholder}
        </label>
      </div>
    );
  } else if (variant === "img-upload") {
    return (
      <div className="input__box__upload" style={style}>
        <input type="file" className="input__box__upload__input" />
        <div className="input__box__upload__content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.561"
            height="16.561"
            viewBox="0 0 16.561 16.561"
          >
            <g
              id="Icon_feather-plus"
              data-name="Icon feather-plus"
              transform="translate(1.5 1.5)"
            >
              <path
                id="Path_9205"
                data-name="Path 9205"
                d="M18,7.5V21.061"
                transform="translate(-11.219 -7.5)"
                fill="none"
                stroke="#7c7a79"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />
              <path
                id="Path_9206"
                data-name="Path 9206"
                d="M7.5,18H21.061"
                transform="translate(-7.5 -11.219)"
                fill="none"
                stroke="#7c7a79"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />
            </g>
          </svg>

          <img src="" alt="" className="input__box__upload__content__img" />
        </div>
      </div>
    );
  } else if (variant === "textarea") {
    return (
      <div className="input__box__area" style={style}>
        <CKEditor
          editor={ClassicEditor}
          data=""
          config={{ placeholder: placeholder }}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="input__box" style={style}>
        {svg}
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className="input__box__field"
        />
      </div>
    );
  }
}
