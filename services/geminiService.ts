
import { GoogleGenAI, Type } from "@google/genai";

export async function generateMarketingAudit(url: string, goal: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Perform a high-level marketing audit for the website ${url}. 
  The user's primary goal is: ${goal}. 
  Provide a professional response with:
  1. A summary of current strengths.
  2. Three critical areas for improvement.
  3. A recommended 30-day action plan.
  
  Format the response as a clean structured report.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "Unable to generate audit at this time.";
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    return "Error connecting to AI auditor. Please try again later.";
  }
}

export async function analyzeLeadQuality(leadData: any) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Analyze this inbound lead for a marketing agency: ${JSON.stringify(leadData)}. 
  Score the lead from 1-10 on potential value and list 2 personalized conversation starters for the sales team.`;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    return "Lead analysis unavailable.";
  }
}
