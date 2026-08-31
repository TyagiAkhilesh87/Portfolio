CREATE TABLE `inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`project_type` text NOT NULL,
	`budget` text NOT NULL,
	`message` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`url` text NOT NULL,
	`category` text NOT NULL,
	`short_description` text NOT NULL,
	`long_description` text,
	`industries` text DEFAULT '[]' NOT NULL,
	`technologies` text DEFAULT '[]' NOT NULL,
	`services` text DEFAULT '[]' NOT NULL,
	`tags` text DEFAULT '[]' NOT NULL,
	`gallery` text DEFAULT '[]' NOT NULL,
	`challenge` text,
	`approach` text,
	`implementation` text,
	`results` text,
	`learnings` text,
	`featured` integer DEFAULT false NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `projects_slug_unique` ON `projects` (`slug`);