import { db } from "./db";
import {
  messages,
  projects,
  skills,
  type Message,
  type InsertMessage,
  type Project,
  type InsertProject,
  type Skill,
  type InsertSkill,
} from "@shared/schema";

export interface IStorage {
  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
  getMessages(): Promise<Message[]>;

  // Projects
  createProject(project: InsertProject): Promise<Project>;
  getProjects(): Promise<Project[]>;

  // Skills
  createSkill(skill: InsertSkill): Promise<Skill>;
  getSkills(): Promise<Skill[]>;
}

export class DatabaseStorage implements IStorage {
  // Messages
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getMessages(): Promise<Message[]> {
    return await db.select().from(messages);
  }

  // Projects
  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db
      .insert(projects)
      .values(insertProject)
      .returning();
    return project;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  // Skills
  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const [skill] = await db
      .insert(skills)
      .values(insertSkill)
      .returning();
    return skill;
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }
}

export const storage = new DatabaseStorage();