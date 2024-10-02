// components/SearchDropdown.tsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

interface SearchDropdownProps {
  items: string[];
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, items]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Item
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.ItemText>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Dropdown.ItemText>
        {filteredItems.length === 0 ? (
          <Dropdown.Item disabled>No results</Dropdown.Item>
        ) : (
          filteredItems.map((item, index) => (
            <Dropdown.Item key={index} href="#">
              {item}
            </Dropdown.Item>
          ))
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchDropdown;
