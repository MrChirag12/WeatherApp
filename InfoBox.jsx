import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBox({info}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1673415819372-e57ae96bb202?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    let HOT_URL = 
        "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = 
        "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL = 
        "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return (
    <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={
                info.humidity > 80 
                ? RAIN_URL 
                : (info.temp > 15) 
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city} {
                info.humidity > 80 
                ? <ThunderstormIcon/>
                : (info.temp > 15) 
                ? <LightModeIcon/>
                : <AcUnitIcon/>
            }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                </Typography>
            </CardContent>
        </Card>
        </div>
    </div>
    );
}