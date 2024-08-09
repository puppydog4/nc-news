/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import VoteButtons from "./VoteButtons";

export default function FullArticleCard({ article }) {
  return (
    <Box
      sx={{
        width: "300",
        height: "400",
        display: "flex",
        alignItems: "center",
        margin: "1rem",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <Card
        sx={{
          borderRadius: "25px",
          position: "relative",
          display: "flex",
          width: "80%",
          height: "80%",
          marginLeft: "auto",
          marginRight: "5%",
          justifyContent: "center",
          flexDirection: "column",
          "@media (max-width: 600px)": {
            width: "70%",
            height: "70%",
            marginLeft: "10%",
          },
          "@media (max-width: 400px)": {
            width: "90%",
            height: "90%",
            marginLeft: "5%",
          },
        }}
      >
        <CardHeader variant="body4" title={"T/" + article.topic} />
        <CardHeader title={article.title}></CardHeader>
        <Box sx={{ ml: "2rem", m: "1rem" }}>
          <Typography variant="body8">{"By "}</Typography>
          <Typography variant="body8" sx={{ fontWeight: "bold" }}>
            {article.author}
          </Typography>
        </Box>
        <CardMedia
          aria-label="article picture"
          sx={{
            width: "60%",
            height: "40%",
            maxHeight: "200",
            alignSelf: "center",
          }}
          component="img"
          height="300"
          image={article.article_img_url}
        />
        <CardContent>
          <Typography variant="body1">{article.body}</Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: "1rem",
          }}
        >
          <VoteButtons article={article} />
        </Box>
      </Card>
    </Box>
  );
}
