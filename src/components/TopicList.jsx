/* eslint-disable react/prop-types */
import { List, ListItemButton } from "@mui/material";

export default function TopicsList({ topics }) {
  return (
    <List>
      {topics.map((topic, index) => {
        return (
          <ListItemButton
            sx={{
              backgroundColor: "#E5EBEE",
              borderRadius: "20px",
              margin: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            href={`/${topic.slug}`}
            key={index}
          >
            T/{topic.slug}{" "}
          </ListItemButton>
        );
      })}
    </List>
  );
}
