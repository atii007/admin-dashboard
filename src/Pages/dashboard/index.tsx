import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import StatBoxContainer from "components/StatBoxContainer";
import StatBox from "components/StatBox";
import SimpleLineChart from "components/LineChart";
import ProgressCircle from "components/ProgressCircle";
import BarCharts from "components/BarChart";
import GeographyCharts from "components/GeographyChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"></Header>

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              p: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon
              sx={{
                mr: "10px",
              }}
            />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Grid and Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 1 */}
        <StatBoxContainer
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </StatBoxContainer>

        <StatBoxContainer
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="331,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </StatBoxContainer>

        <StatBoxContainer
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="231,121"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </StatBoxContainer>

        <StatBoxContainer
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="1,234,123"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </StatBoxContainer>
        {/* Row 2 */}
        <Box
          sx={{
            gridColumn: "span 8",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Box
            mt="20px"
            p="0 20px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-30px">
            <SimpleLineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Transactions */}
        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `4px solid ${colors.primary[500]}`,
              colors: colors.grey[100],
              p: "15px",
            }}
          >
            <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  p: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Row 3 */}

        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: " span 2",
            backgroundColor: colors.primary[400],
            p: "20px",
          }}
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,123 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            p: "20px 0px 0 20px",
            gridColumn: "span 4",
            gridRow: " span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Sales Quantity
          </Typography>
          <Box height="200px">
            <BarCharts isDashboard={true} />
          </Box>
        </Box>

        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: " span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "20px 20px 0 20px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="250px" mt="-20px">
            <GeographyCharts isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
