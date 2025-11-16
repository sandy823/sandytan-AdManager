/**
 * app.js
 * ----------------------------------------------
 * This file is used to test the AdManager module
 */

const AdManager = require("./SandyTan_AdManager");

console.log("====================================");
console.log("     Starting the AdManager Test     ");
console.log("====================================");

// Create campaigns
console.log("\nCreating campaigns...");

// LV with ambassador & target audience
const lvCampaign = AdManager.createAdCampaign({
    name: "LOUIS VUITTON Women's Spring-Summer 2025 Collection Launch",
    budget: 2700,
    status: "Active",
    startDate: "2025-11-16",
    endDate: "2025-12-12",
    ambassador: "Lalisa Manobal",
    targetAudience: ["Fashion Lovers"]
});

// Gucci without ambassador & target audience
const gucciCampaign = AdManager.createAdCampaign({
    name: "GUCCI Fall-Winter 2025 Collection Launch",
    budget: 1800,
    status: "Paused",
    startDate: "2025-09-16",
    endDate: "2025-11-12"
});

AdManager.printCampaign(lvCampaign);
AdManager.printCampaign(gucciCampaign);

// Update campaign 
console.log("\nUpdating Gucci campaign...");
AdManager.updateCampaign(gucciCampaign.id, {
    budget: 2200,
    ambassador: "Hanni (NewJeans)",
    targetAudience: ["Luxary Shoppers"]
});

AdManager.printCampaign(gucciCampaign);

// Record campaign performance
console.log("\nRecording campaign performance...");
AdManager.recordCampaignPerformance(lvCampaign.id, 2700, 6000);
AdManager.recordCampaignPerformance(gucciCampaign.id, 1900, 3302);

AdManager.printCampaign(lvCampaign);
AdManager.printCampaign(gucciCampaign);

// Display all campaigns
console.log("\nAll Campaigns:");
AdManager.getAllCampaigns().forEach(AdManager.printCampaign);

// search campaign by name
console.log("\nSearching Campaign(s):");
AdManager.searchCampaignByName("guc");

// Delete Gucci campaign
console.log("\nDeleting Gucci campagin...");
AdManager.deleteCampaign(gucciCampaign.id);

// Display all campaigns (Updated after the delete function)
console.log("\nAll Campaigns:");
AdManager.getAllCampaigns().forEach(AdManager.printCampaign);