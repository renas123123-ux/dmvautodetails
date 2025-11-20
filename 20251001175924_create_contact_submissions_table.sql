/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required) - Customer name
      - `email` (text, required) - Customer email
      - `phone` (text, optional) - Customer phone number
      - `message` (text, required) - Customer message
      - `created_at` (timestamptz) - Submission timestamp
      - `status` (text) - Submission status (new, read, replied)
      - `recipient_email` (text) - Email address to notify (renas123123@gmail.com)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public inserts (anyone can submit a contact form)
    - Only authenticated users can read submissions (for admin purposes)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  recipient_email text DEFAULT 'renas123123@gmail.com',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
