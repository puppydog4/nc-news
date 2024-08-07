/* eslint-disable react/prop-types */
import {
  ArrowDownward,
  ArrowUpward,
  ChatBubbleOutline,
} from "@mui/icons-material";
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
import { timeAgo } from "../utils/date-format";
import { styled } from "@mui/system";

export default function ArticleCard({ article }) {
  const HoverCard = styled(Card)(({}) => ({
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  }));
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
      <HoverCard
        sx={{
          borderRadius: "25px",
          border: "none",
          boxShadow: "none",
          position: "relative",
          display: "flex",
          marginLeft: "15%",
          width: "50%",
          height: "50%",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Link
          sx={{
            color: "black",
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            flexDirection: "column",
            underline: "none",
          }}
          underline="none"
          href={"/article/" + article.article_id}
        >
          <Typography
            sx={{
              alignSelf: "flex-start",
              marginRight: "auto",
              margin: "1rem",
              marginBottom: "0",
            }}
          >
            {timeAgo(article.created_at)} in T/{article.topic}
          </Typography>
          <CardHeader title={article.title} />
          <CardMedia
            sx={{
              borderRadius: "25px",
              width: "80%",
              height: "auto",
              maxHeight: "200",
              alignSelf: "center",
            }}
            component="img"
            height="300"
            image={article.article_img_url}
          />
          <CardContent>
            <Typography variant="body2">{article.body}</Typography>
          </CardContent>
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#E5EBEE",
              borderRadius: "20px",
              margin: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button>
              <ArrowUpward />
            </Button>
            <Typography>{article.votes}</Typography>
            <Button>
              <ArrowDownward />
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "#E5EBEE",
              borderRadius: "15px",
              margin: "1rem",
              padding: "0.5rem",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ChatBubbleOutline sx={{ marginLeft: "1rem" }} />
            <Typography
              sx={{
                marginLeft: "1rem",
                marginRight: "1rem",
                marginBottom: "0.25rem",
              }}
            >
              {article.comment_count}
            </Typography>
          </Box>

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
      </HoverCard>
    </Box>
  );
}
