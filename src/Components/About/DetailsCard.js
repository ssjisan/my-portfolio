import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import details from "../../Assets/Intorduction.json";
export default function DetailsCard() {
  const forBelow416 = useMediaQuery("(max-width:416px)");
  const forBelow899 = useMediaQuery("(max-width:899px)");
  const forBelow999 = useMediaQuery("(max-width:999px)");
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: forBelow899 ? "100" : forBelow999 ? "580px" : "720px",
        }}
      >
        <Box sx={{ mb: 5 }}>
          <Typography
            sx={{
              fontSize: forBelow416 ? "24px" : forBelow999 ? "32px" : "48px",
              fontWeight: 700,
              mb: 2,
            }}
          >
            I'm Frontend Developer & UI/UX Designer.
          </Typography>
          <Typography
            sx={{
              color: "#0009",
              fontSize: forBelow999 ? "14px" : "18px",
              fontWeight: 400,
            }}
          >
            Hey, I’m Sadman Sakib Jisan - hope you doing well. Now that you are
            here, why not know a little about me?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {details.map((data) => (
            <Box>
              <Typography
                sx={{
                  fontSize: forBelow999 ? "16px" : "20px",
                  fontWeight: 600,
                }}
              >
                {data.title}
              </Typography>
              <Typography
                sx={{
                  color: "#0009",
                  fontSize: forBelow999 ? "14px" : "18px",
                  fontWeight: 400,
                  paddingTop: "16px",
                }}
              >
                {data?.description}
              </Typography>
              {data?.language && (
                <Typography
                  sx={{
                    fontSize: forBelow999 ? "14px" : "16px",
                    fontWeight: 600,
                    color: "#999999",
                    marginBottom: "16px",
                  }}
                >
                  Language
                </Typography>
              )}
              {data?.language?.map((data) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "280px",
                    marginBottom: "16px",
                  }}
                >
                  <img
                    src={data.img}
                    alt={data.title}
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#fff",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: forBelow999 ? "12px" : "14px",
                      fontWeight: 400,
                    }}
                  >
                    {" "}
                    {data.title}
                  </Typography>
                </Box>
              ))}
              {data?.jsUi && (
                <Typography
                  sx={{
                    fontSize: forBelow999 ? "14px" : "16px",
                    fontWeight: 600,
                    color: "#999999",
                    marginBottom: "16px",
                  }}
                >
                  JavaScript UI
                </Typography>
              )}
              {data?.jsUi?.map((data) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "280px",
                    marginBottom: "16px",
                  }}
                >
                  <img
                    src={data.img}
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#fff",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    alt={data.title}
                  />
                  <Typography
                    sx={{
                      fontSize: forBelow999 ? "12px" : "14px",
                      fontWeight: 400,
                    }}
                  >
                    {" "}
                    {data.title}
                  </Typography>
                </Box>
              ))}
              {data?.frontEndFrameworks && (
                <Typography
                  sx={{
                    fontSize: forBelow999 ? "14px" : "16px",
                    fontWeight: 600,
                    color: "#999999",
                    marginBottom: "16px",
                  }}
                >
                  Front End Frameworks
                </Typography>
              )}
              {data?.frontEndFrameworks?.map((data) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "280px",
                    marginBottom: "16px",
                  }}
                >
                  <img
                    src={data.img}
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#fff",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    alt={data.title}
                  />
                  <Typography
                    sx={{
                      fontSize: forBelow999 ? "12px" : "14px",
                      fontWeight: 400,
                    }}
                  >
                    {" "}
                    {data.title}
                  </Typography>
                </Box>
              ))}
              {data?.uiux && (
                <Typography
                  sx={{
                    fontSize: forBelow999 ? "14px" : "16px",
                    fontWeight: 600,
                    color: "#999999",
                    marginBottom: "16px",
                  }}
                >
                  UI/UX Design & Prototyping
                </Typography>
              )}
              {data?.uiux?.map((data) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "280px",
                    marginBottom: "16px",
                  }}
                >
                  <img
                    src={data.img}
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#fff",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    alt={data.title}
                  />
                  <Typography
                    sx={{
                      fontSize: forBelow999 ? "12px" : "14px",
                      fontWeight: 400,
                    }}
                  >
                    {" "}
                    {data.title}
                  </Typography>
                </Box>
              ))}
              {data?.webHosting && (
                <Typography
                  sx={{
                    fontSize: forBelow999 ? "14px" : "16px",
                    fontWeight: 600,
                    color: "#999999",
                    marginBottom: "16px",
                  }}
                >
                  Web Hosting
                </Typography>
              )}
              {data?.webHosting?.map((data) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "280px",
                    marginBottom: "16px",
                  }}
                >
                  <img
                    src={data.img}
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#fff",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    alt={data.title}
                  />
                  <Typography
                    sx={{
                      fontSize: forBelow999 ? "12px" : "14px",
                      fontWeight: 400,
                    }}
                  >
                    {" "}
                    {data.title}
                  </Typography>
                </Box>
              ))}
              {data?.graphicDesign && (
                <Typography
                  sx={{
                    fontSize: forBelow999 ? "14px" : "16px",
                    fontWeight: 600,
                    color: "#999999",
                    marginBottom: "16px",
                  }}
                >
                  Graphic Design
                </Typography>
              )}
              {data?.graphicDesign?.map((data) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "280px",
                    marginBottom: "16px",
                  }}
                >
                  <img
                    src={data.img}
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#fff",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    alt={data.title}
                  />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    {" "}
                    {data.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
