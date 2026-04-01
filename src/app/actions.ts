"use server";

import { supabase } from "@/lib/supabase";

export type RegistrationState = {
  success: boolean;
  error?: string;
};

/** Insert a hackathon registration into Supabase. */
export const submitRegistration = async (
  _prev: RegistrationState,
  formData: FormData
): Promise<RegistrationState> => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const teamPreference = formData.get("team_preference") as string;
  const experience = formData.get("experience") as string;
  const projectIdea = (formData.get("project_idea") as string) || null;

  if (!name || !email || !teamPreference || !experience) {
    return { success: false, error: "Please fill out all required fields." };
  }

  const { error } = await supabase.from("registrations").insert({
    name,
    email,
    team_preference: teamPreference,
    experience,
    project_idea: projectIdea,
  });

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "That email is already registered!" };
    }
    return { success: false, error: "Something went wrong. Try again?" };
  }

  return { success: true };
};
