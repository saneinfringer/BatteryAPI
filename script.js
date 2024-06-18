const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(".batteryDisChargingTime");

const battery = () => {
    if("getBattery" in navigator){
        navigator.getBattery().then(battery => {
            console.log(battery);
            function updateAllBatteryInfo(){
                updateChargeInfo();
                updateLevelInfo();
                updateChargingInfo();
                updateDischargingInfo();
            }
            updateAllBatteryInfo();
            //battery level
            battery.addEventListener("levelchange", () => {
                updateLevelInfo();
              });
              function updateLevelInfo() {
                batteryLevel.innerHTML = ` ${battery.level * 100}%`;
              }
            //battery charging
            battery.addEventListener("chargingchange", () => {
                updateChargeInfo();
            });
            function updateChargeInfo(){
                const isCharging = `${battery.charging ? "Yes" : "No"}`;
                batteryCharging.innerHTML = isCharging;
            }
            //battery charging time
            battery.addEventListener("chargingtimechange", () => {
                updateChargingInfo();
              });
              function updateChargingInfo() {
                batteryChargingTime.innerHTML = `${battery.chargingTime} seconds`;
              }
            //battery discarging time
            battery.addEventListener("dischargingtimechange", () => {
                updateDischargingInfo();
              });
              function updateDischargingInfo() {
                batteryDisChargingTime.innerHTML = `${battery.dischargingTime} seconds`;
              }
            //battery status
        });
    }
};
battery();