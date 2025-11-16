# Assignment 1: Social Media Advertising Manager (Node Module)

## Overview
This **SandyTan_AdManger.js** module simulates a simple Social Media Marketing system that manages advertisement campaigns.
It uses **arrays as a dummy database**.

> **impressions**: The number of times the ad is displayed to someone\
> **clicks**: When someone interacts with the ad \
> **Click-Through Rate**: Measures how effective the ad is at getting clicks from impressions

This module allows you to:
- Create ad campaign
- Update campaign 
- Record campagin performance (impressions, clicks)
- Calculate CTR (Click-Through Rate)
- List all campaigns
- Delete campaign

## Files Included
- **SandyTan_AdManager.js** : The node module containing 6 functions.
- **app.js** : A Node application to test the module.
- **README.md** : Instructions on how to use the module.

## How to Set Up
1. Create a project folder.
2. Place the following files inside the folder:
    - `SandyTan_AdManager.js`
    - `app.js`
    - `README.md`
3. Open a terminal inside the folder.
4. Run the test file using: node app / nodemon app

## Functions
Below are the functions available in **SandyTan_AdManager.js**, along with instrucions and parameter descriptions.

**1. createAdCampaign({name, budget, status, startDate, endDate, ambassador, targetAudience})**
- Creates a new advertisiement campaign with optional ambassador and target audience.

  **Parameters**
    - `name` (string) : Campaign name (required)
    - `budget` (number) : Budget in dollars (required)
    - `status` (string) : e.g., "Active", "Paused" (required)
    - `startDate` (string) : Campaign start date (required)
    - `endDate` (string) : Campaign start date (required)
    - `ambassador` (string) : Campaign ambassador (optional)
    - `targetAudience` (array) : List of target audiences (optional) 
    
    ### Example  
    ```javascript
    const lvCampaign = AdManager.createAdCampaign({
        name: "LOUIS VUITTON Women's Spring-Summer 2025 Collection Launch",
        budget: 2700,
        status: "Active",
        startDate: "2025-11-16",
        endDate: "2025-12-12",
        ambassador: "Lalisa Manobal",
        targetAudience: ["Fashion Lovers"]
    });
    ```

**2. updateCampaign(id, updates)**
- Updates one or more fields of an existing campaign.

  **Parameters**
    - `id` (number) : Campaign ID (required)
    - `updates` (object) : Any fields you want to update (required) 

    ### Example  
    ```javascript
    AdManager.updateCampaign(gucciCampaign.id, {
        budget: 2200,
        ambassador: "Hanni (NewJeans)",
        targetAudience: ["Luxary Shoppers"]
    });
    ```

**3. recordCampaignPerformance(id, impressions, clicks)**
- Simulates and records performance metrics.

  **Parameters**
    - `id` (number) : Campaign ID (required)
    - `impressions` (number) : Number of views to add (default: 0)
    - `clicks` (number) : Number of clicks to add (default: 0)

    ### Example  
    ```javascript
    AdManager.recordCampaignPerformance(gucciCampaign.id, 1900, 3302);
    ```

**4. getCTR(campaign)**
- Calculates the Click-Through Rate (CTR) for a campaign.

  **Formula**
  <br>
  CTR = (clicks / impressions) × 100%

  **Parameters**
    - `campaign` (object) : A campaign object (required)

    ### Example  
    ```javascript
    printCampaign(c) {
        const ctr = module.exports.getCTR(c);
        console.log(`CTR: ${ctr}%`);
    }
    ```

**5. getAllCampaigns()**
- Returns a list of all campaigns stored in the dummy database.

    ### Example  
    ```javascript
    AdManager.getAllCampaigns().forEach(AdManager.printCampaign);
    ```

**6. deleteCampaign(id)**
- Deletes a campaign from the system.

  **Parameters**
    - `id` (number) : Campaign ID (required)

    ### Example  
    ```javascript
    AdManager.deleteCampaign(gucciCampaign.id);
    ```

**(Extra Helper) printCampaign(c)**
- Prints campaign details nicely in the console (used for testing, optional).

    ### Example  
    ```javascript
    AdManager.printCampaign(lvCampaign);
    ```

## References
Meta Ads Manager – https://www.facebook.com/business/tools/ads-manager 