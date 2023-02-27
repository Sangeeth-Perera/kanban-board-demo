import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface IOutlinedCard {
  title: string;
  description: string;
  url: string;
}
export default function OutlinedCard({
  title,
  description,
  url,
}: IOutlinedCard) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <React.Fragment>
        <Box sx={{ minWidth: 275 }}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => window.open(url)}>
                {url}
              </Button>
            </CardActions>
          </Card>
        </Box>
      </React.Fragment>
    </Box>
  );
}
