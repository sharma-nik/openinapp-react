import React, { useEffect, useState } from "react";

//icons
import crossIcon from "../../../../assets/Cross.svg";

//styles
import "./UploadsTable.scss";

const UploadsTable = ({ uploadsData: uploadsDataFromProps }) => {
  const [uploadsData, setUploadsData] = useState([]);

  useEffect(() => {
    setUploadsData(uploadsDataFromProps);
  }, [uploadsDataFromProps]);

  const addTagsHandler = (id, tag) => {
    const temp = uploadsData.map((data) => {
      if (data.id === id) {
        if (data.selectedTags) {
          if (!data.selectedTags.includes(tag)) {
            return {
              ...data,
              selectedTags: [...data.selectedTags, tag],
            };
          } else {
            return {
              ...data,
              selectedTags: [...data.selectedTags],
            };
          }
        } else {
          return {
            ...data,
            selectedTags: [tag],
          };
        }
      }
      return data;
    });
    setUploadsData(temp);
  };

  const removeTagsHandler = (id, tag) => {
    const temp = uploadsData.map((data) => {
      if (data.id === id) {
        if (data.selectedTags) {
          const tempTags = data.selectedTags.filter(
            (selectedTag) => selectedTag !== tag
          );
          return {
            ...data,
            selectedTags: [...tempTags],
          };
        }
      }
      return data;
    });
    setUploadsData(temp);
  };

  return (
    <div className="uploads">
      <p className="uploads__title">Uploads</p>

      <table className="uploads__table-container">
        <tr>
          <th className="uploads__table-data">SI No.</th>
          <th className="uploads__table-data">Links</th>
          <th className="uploads__table-data">Prefix</th>
          <th className="uploads__table-data">Add Tags</th>
          <th className="uploads__table-data">Selected Tags</th>
        </tr>
        {uploadsData.map((data) => {
          return (
            <tr className="uploads__table-row" key={data.prefix}>
              <td className="uploads__table-data">{data.id}</td>
              <td className="uploads__table-data uploads__table-data-link">
                <a
                  href={"www.google.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.links}
                </a>
              </td>
              <td className="uploads__table-data">{data.prefix}</td>
              <td className="uploads__table-data">
                <select
                  className="uploads__table-data-select"
                  onChange={(e) => addTagsHandler(data.id, e.target.value)}
                >
                  {data["select tags"].split(", ").map((tag) => {
                    return <option value={tag}>{tag}</option>;
                  })}
                </select>
              </td>
              <td className="uploads__table-data">
                <div className="uploads__tags-container">
                  {data.selectedTags &&
                    data.selectedTags.map((tag) => {
                      return (
                        <div className="uploads__tag">
                          <p className="uploads__tag-title">{tag}</p>
                          <img
                            src={crossIcon}
                            className="uploads__tag-icon"
                            onClick={() => removeTagsHandler(data.id, tag)}
                          />
                        </div>
                      );
                    })}
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default UploadsTable;
