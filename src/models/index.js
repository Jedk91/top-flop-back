import { User } from "./User.js";
import { Team } from "./Team.js";
import { TeamMember } from "./TeamMember.js";
import { Lobby } from "./Lobby.js";
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

User.hasMany(Lobby, {
  foreignKey: "creator_user_id",
});

Lobby.belongsTo(User, {
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

// Une Team peut être utilisée par plusieurs Lobbies

Team.hasMany(Lobby, {
  foreignKey: "team_id",
});

Lobby.belongsTo(Team, {
  foreignKey: "team_id",
});

// LOBBY

// Un Lobby possède plusieurs Participants

Lobby.hasMany(Participant, {
  foreignKey: "lobby_id",
});

Participant.belongsTo(Lobby, {
  foreignKey: "lobby_id",
});

// Un Lobby possède plusieurs Votes

Lobby.hasMany(Vote, {
  foreignKey: "lobby_id",
});

Vote.belongsTo(Lobby, {
  foreignKey: "lobby_id",
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

export const Tables = {
  User,
  Team,
  Lobby,
  TeamMember,
  Participant,
  Vote,
};
