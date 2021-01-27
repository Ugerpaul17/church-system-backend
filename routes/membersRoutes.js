/**
 * @swagger
 * /api/v1/members:
 *   get:
 *     summary: Retrieve a list of Members.
 *     description: Retrieve a list of members from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of members.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The member ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The member's name.
 *                         example: Uger Paul
 */

 /**
 * @swagger
 * /api/v1/members:
 *   post:
 *     summary: Create a member.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The member ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The member's name.
 *                       example: Uger Paul
*/

 /**
 * @swagger
 * /api/v1/members/{id}:
 *   get:
 *     summary: Retrieve a single member.
 *     description: Retrieve a single member. Can be used to populate a member profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the member to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single member.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The member ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The member's name.
 *                       example: Uger Paul
*/

const express = require("express");
const memberController = require("./../controllers/membersController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  // .get(authController.protect, memberController.getAllMembers)
  .get(memberController.getAllMembers)
  .post(memberController.createMember);

router
  .route("/:id")
  .get(memberController.getMember)
  .patch(memberController.updateMember)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    memberController.deleteMember
  );

module.exports = router;
