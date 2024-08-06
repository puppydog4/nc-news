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
  Link,
} from "@mui/material";

export default function ArticleCard({ article }) {
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
      <Link
        sx={{
          width: "50%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          margin: "1rem",
          flexDirection: "column",
        }}
        underline="none"
        href={"/article/" + article.article_id}
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
          <CardMedia
            sx={{ width: "100%", height: "auto", maxHeight: "200" }}
            component="img"
            height="300"
            image={article.article_img_url}
          />
          <CardContent>
            <Typography variant="body2">{article.body}</Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button>
              <ArrowUpward />
            </Button>
            <Typography sx={{ margin: "1.5rem" }}>{article.votes}</Typography>
            <Button>
              <ArrowDownward />
            </Button>
            <Typography
              sx={{
                alignSelf: "flex-end",
                marginBottom: "1rem",
                marginLeft: "auto",
                marginRight: "1rem",
              }}
              variant="body4"
            >
              By {article.author}
            </Typography>
          </Box>
        </Card>
      </Link>
    </Box>
  );
}
