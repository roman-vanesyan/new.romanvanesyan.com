CREATE TABLE `subscribed_users` (
	`id` integer PRIMARY KEY NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP,
	`email` text NOT NULL,
	`name` text,
	`is_email_verified` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `subscribed_users_email_unique` ON `subscribed_users` (`email`);
