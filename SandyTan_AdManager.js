/**
 * AdManager.js
 * ------------------------------------------------------
 * Social Media Advertising Manager Module
 * 
 * Allows users to:
 * - Create ad campaign
 * - Update campaign
 * - Record campaign performance
 * - Calculate CTR (Click-Through Rate)
 * - List all campaigns
 * - Search campaigns by name
 * - Delete campaign
 */

// Dummy array for simulating a database
let campaigns = [];
let nextCampaignID = 1;

module.exports = {
    
    // Creates a new advertisement campaign with optional ambassador & target audience
    createAdCampaign ({
        name, 
        budget, 
        status,
        startDate,
        endDate,
        ambassador = null,
        targetAudience = []
    }) {

        // Validate required fields
        if (!name || !budget || !status || !startDate || !endDate) {
            throw new Error ("Missing required fields: name, budget, status, startDate, endDate");
        }

        const newCampaign = {
            id: nextCampaignID++,
            name,
            budget,
            ambassador,
            targetAudience: Array.isArray(targetAudience) ? targetAudience : [],
            impressions: 0,
            clicks: 0,
            status,
            startDate,
            endDate
        };
        campaigns.push(newCampaign);
        return newCampaign;
    },

    // Update one or more fields of a campaign
    updateCampaign(id, updates = {}) {
        const campaign = campaigns.find(c => c.id === id);
        if (!campaign) return null;

        if (updates.ambassador != undefined) {
            campaign.ambassador = updates.ambassador;
        }

        if (Array.isArray(updates.targetAudience)) {
            campaign.targetAudience = Array.from(
                new Set([...campaign.targetAudience, ...updates.targetAudience])
            );
        }

        if (updates.budget != undefined) {
            campaign.budget = updates.budget;
        }
        
        if (updates.status != undefined) {
            campaign.status = updates.status;
        }
        
        if (updates.startDate != undefined) {
            campaign.startDate = updates.startDate;
        }

        if (updates.endDate != undefined) {
            campaign.endDate = updates.endDate;
        }

        return campaign;
    },

    // Simulate performance: impressions and clicks
    recordCampaignPerformance (id, impressions = 0, clicks = 0) {
        const campaign = campaigns.find(c => c.id === id);

        if (!campaign) return null;

        campaign.impressions += impressions;
        campaign.clicks += clicks;

        return campaign;
    },

    // To calculate CTR (%)
    getCTR (campaign) {
        return campaign.impressions > 0
            ? ((campaign.clicks / campaign.impressions) * 100).toFixed(2) : "0.00";
    },

    // Returns a list of all ad campaigns
    getAllCampaigns () {
        return [...campaigns];
    },

    // Search campaigns by name and auto print results
    searchCampaignByName (name) {
        if (!name) {
            console.log("Please provide a campaign name to search.");
            return [];
        }

        const lower = name.toLowerCase();

        const results = campaigns.filter(c => c.name.toLowerCase().includes(lower));

        if (results.length === 0) {
            console.log(`No campaigns found matching: "${name}"`);
            return [];
        }

        console.log(`Found ${results.length} campaign(s) matching "${name}":`);

        results.forEach(c => module.exports.printCampaign(c));

        return results;   // still return results if needed
    },

    // Delete a campaign
    deleteCampaign (id) {
        const index = campaigns.findIndex(c => c.id === id);

        if (index === -1) return false;
        campaigns.splice(index, 1);
        return true;
    },

    // Helper to print campaign details nicely
    printCampaign(c) {
        const ctr = module.exports.getCTR(c);

        console.log(`
        -----------------------------------------
        Campaign ID:          ${c.id}
        Campaign Name:        ${c.name}
        Budget:               $${c.budget}
        Ambassador:           ${c.ambassador || "None Assigned"}
        Status:               ${c.status}
        Target Audiences:     ${c.targetAudience.length > 0 ? c.targetAudience.join(", ") : "None Added"}
        Impressions:          ${c.impressions}
        Clicks:               ${c.clicks}
        CTR:                  ${ctr}%
        Start Date:           ${c.startDate}
        End Date:             ${c.endDate}
        -----------------------------------------
        `);
    }

};