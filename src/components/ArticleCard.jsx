/* eslint-disable react/prop-types */
import { ChatBubbleOutline } from "@mui/icons-material";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from "@mui/material";
import { timeAgo } from "../utils/date-format";
import { styled } from "@mui/system";
import VoteButtons from "./VoteButtons";

export default function ArticleCard({ article }) {
  // eslint-disable-next-line no-empty-pattern
  const HoverCard = styled(Card)(({}) => ({
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  }));
  return (
    <>
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
            width: "70%",
            height: "70%",
            justifyContent: "center",
            flexDirection: "column",
            "@media (max-width: 960px)": {
              width: "100%",
              height: "100%",
              ml: "0",
              mr: "0",
            },
            "@media (max-width: 400px)": {
              width: "100%",
              height: "100%",
              ml: "0",
              mr: "0",
            },
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
            aria-label="Link to article"
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
              alt={"picture for " + article.title}
              sx={{
                borderRadius: "25px",
                width: "60%",
                alignSelf: "center",
                height: "60%",

                "@media (max-width: 960px)": {
                  width: "80%",
                  height: "80%",
                },
                "@media (max-width: 600px)": {
                  width: "90%",
                  height: "90%",
                },
              }}
              component="img"
              height="300"
              image={article.article_img_url}
            />
            <CardContent>
              <Typography
                variant="body2"
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitLineClamp: 3,
                  lineClamp: 3,
                  height: "4.5em",
                }}
              >
                {article.body}
              </Typography>
            </CardContent>
          </Link>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <VoteButtons article={article} />
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
                display: { xs: "none", sm: "flex" },
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
    </>
  );
}
