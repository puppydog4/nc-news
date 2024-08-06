/* eslint-disable react/prop-types */
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

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
      }}
    >
      <Card
        sx={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CardHeader variant="body4" title={"T/" + article.topic} />
        <CardHeader title={article.title}></CardHeader>
        <Box sx={{ displa: "flex", margin: "1rem" }}>
          <Typography variant="body8">{"By "}</Typography>
          <Typography variant="body8" sx={{ color: "orangered" }}>
            {article.author}
          </Typography>
        </Box>
        <CardMedia
          sx={{ width: "100%", height: "auto", maxHeight: "200" }}
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
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Button>
              <ArrowUpward />
            </Button>
            <Typography sx={{ margin: "1.5rem" }}>{article.votes}</Typography>
            <Button>
              <ArrowDownward />
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
