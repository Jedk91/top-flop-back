import { User } from "./User.js";
import { Team } from "./Team.js";
import { TeamMember } from "./TeamMember.js";
import { Salon } from "./Salon.js";
import { Participant } from "./Participant.js";
import { Vote } from "./Vote.js";

// USER

User.hasMany(Team, {
  foreignKey: "admin_user_id",
});

Team.belongsTo(User, {
  foreignKey: "admin_user_id",
});

User.hasMany(TeamMember, {
  foreignKey: "user_id",
});

TeamMember.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Salon, {
  foreignKey: "creator_user_id",
});

Salon.belongsTo(User, {
  foreignKey: "creator_user_id",
});

// TEAM

// Une Team possède plusieurs TeamMembers
Team.hasMany(TeamMember, {
  foreignKey: "team_id",
});

TeamMember.belongsTo(Team, {
  foreignKey: "team_id",
});

// Une Team peut être utilisée par plusieurs Salons
Team.hasMany(Salon, {
  foreignKey: "team_id",
});

Salon.belongsTo(Team, {
  foreignKey: "team_id",
});

// SALON

// Un Salon possède plusieurs Participants
Salon.hasMany(Participant, {
  foreignKey: "salon_id",
});

Participant.belongsTo(Salon, {
  foreignKey: "salon_id",
});

// Un Salon possède plusieurs Votes
Salon.hasMany(Vote, {
  foreignKey: "salon_id",
});

Vote.belongsTo(Salon, {
  foreignKey: "salon_id",
});

// PARTICIPANT

// Un Participant peut avoir plusieurs votes en tant que votant
Participant.hasMany(Vote, {
  foreignKey: "voter_id",
  as: "votesGiven",
});

Vote.belongsTo(Participant, {
  foreignKey: "voter_id",
  as: "voter",
});

// Un Participant peut être la cible de plusieurs votes
Participant.hasMany(Vote, {
  foreignKey: "target_id",
  as: "votesReceived",
});

Vote.belongsTo(Participant, {
  foreignKey: "target_id",
  as: "target",
});

export {
  User,
  Team,
  Salon,
  TeamMember,
  Participant,
  Vote
}