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

export default function ArticleCard({ articles }) {
  return articles.map((article) => {
    return (
      <Box
        key={article.article_id}
        sx={{ display: "flex", justifyContent: "center", margin: "1rem" }}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "50%",
            minWidth: "30%",
          }}
        >
          <CardHeader variant="body4" title={"T/" + article.topic} />
          <CardHeader title={article.title}></CardHeader>
          <CardMedia
            component="img"
            height="300"
            image={article.article_img_url}
          />
          <CardContent>
            <Typography variant="body2" sx={{ WebkitLineClamp: 3 }}>
              {article.body}
            </Typography>
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
      </Box>
    );
  });
}
