import React from "react";
import { Select } from "antd";

const { Option } = Select;

const SearchSelect = ({ handleChange, handleFocus, handleBlur }) => (
    <Select
        className="searchSelect"
        showSearch
        placeholder="输入职位名称及关键字"
        optionFilterProp="children"
        onChange={ handleChange }
        onFocus={ handleFocus }
        onBlur={ handleBlur }
        filterOption={(input, option) => 
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
    </Select>
);

export default SearchSelect;
