/*
 Navicat Premium Data Transfer

 Source Server         : cloud-server
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : 43.139.66.230:3306
 Source Schema         : coderhub

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 12/01/2023 12:49:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for avatar
-- ----------------------------
DROP TABLE IF EXISTS `avatar`;
CREATE TABLE `avatar`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mimetype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `size` int NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `filename`(`filename`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of avatar
-- ----------------------------
INSERT INTO `avatar` VALUES (16, 'default', 'image/png', 180268, 1, '2023-01-12 12:17:22', '2023-01-12 12:20:33');
INSERT INTO `avatar` VALUES (17, '6ec2483ab95fb1b13ea3f6bdf0e7b937', 'image/png', 213391, 24, '2023-01-12 12:18:49', '2023-01-12 12:18:49');
INSERT INTO `avatar` VALUES (18, 'a3a94420a417f934a2628d3bac06e15a', 'image/png', 145982, 21, '2023-01-12 12:19:39', '2023-01-12 12:19:39');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `moment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `comment_id` int NULL DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `moment_id`(`moment_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `comment_id`(`comment_id`) USING BTREE,
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, 'yoyo', 10, 21, NULL, '2023-01-11 14:49:15', '2023-01-11 14:49:15');
INSERT INTO `comment` VALUES (3, '嘻嘻~', 10, 21, 1, '2023-01-11 17:21:25', '2023-01-11 17:21:25');
INSERT INTO `comment` VALUES (4, '天气预报说晚上要下雨~', 1, 22, NULL, '2023-01-11 17:38:24', '2023-01-11 17:38:24');
INSERT INTO `comment` VALUES (5, '小老弟，你不对劲~', 8, 22, NULL, '2023-01-11 17:39:16', '2023-01-11 17:39:16');
INSERT INTO `comment` VALUES (6, '嘻嘻~', 8, 21, 5, '2023-01-11 17:39:49', '2023-01-11 17:39:49');
INSERT INTO `comment` VALUES (7, '你是来搞笑的吧~', 1, 21, NULL, '2023-01-12 12:40:00', '2023-01-12 12:40:00');
INSERT INTO `comment` VALUES (9, '怎么不对劲了~', 8, 21, 5, '2023-01-12 12:42:20', '2023-01-12 12:42:20');

-- ----------------------------
-- Table structure for label
-- ----------------------------
DROP TABLE IF EXISTS `label`;
CREATE TABLE `label`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of label
-- ----------------------------
INSERT INTO `label` VALUES (1, '篮球', '2023-01-11 18:47:11', '2023-01-11 18:47:11');
INSERT INTO `label` VALUES (2, '编程', '2023-01-11 18:47:29', '2023-01-11 18:47:29');
INSERT INTO `label` VALUES (3, 'rap', '2023-01-11 19:06:02', '2023-01-11 19:06:02');
INSERT INTO `label` VALUES (4, '跳舞', '2023-01-11 19:06:05', '2023-01-11 19:06:05');
INSERT INTO `label` VALUES (5, '动漫', '2023-01-11 19:06:12', '2023-01-11 19:06:12');
INSERT INTO `label` VALUES (6, '音乐', '2023-01-11 19:06:15', '2023-01-11 19:06:15');
INSERT INTO `label` VALUES (7, '唱歌', '2023-01-11 19:39:37', '2023-01-11 19:39:37');
INSERT INTO `label` VALUES (8, '体育', '2023-01-11 19:39:37', '2023-01-11 19:39:37');
INSERT INTO `label` VALUES (9, '哲学', '2023-01-11 19:39:37', '2023-01-11 19:39:37');
INSERT INTO `label` VALUES (10, '推荐', '2023-01-11 20:15:43', '2023-01-11 20:15:43');
INSERT INTO `label` VALUES (11, '手机', '2023-01-12 12:39:22', '2023-01-12 12:39:22');

-- ----------------------------
-- Table structure for moment
-- ----------------------------
DROP TABLE IF EXISTS `moment`;
CREATE TABLE `moment`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of moment
-- ----------------------------
INSERT INTO `moment` VALUES (1, '今天天气很好~', 23, '2023-01-11 10:48:44', '2023-01-11 10:48:44');
INSERT INTO `moment` VALUES (4, '你在干嘛呀~', 23, '2023-01-11 10:50:30', '2023-01-11 10:50:30');
INSERT INTO `moment` VALUES (6, '哈哈~', 23, '2023-01-11 10:59:25', '2023-01-11 10:59:25');
INSERT INTO `moment` VALUES (7, '喂喂，你好~', 21, '2023-01-11 11:01:26', '2023-01-11 11:01:26');
INSERT INTO `moment` VALUES (8, '当你老了，头发白了~', 21, '2023-01-11 11:01:41', '2023-01-11 11:01:41');
INSERT INTO `moment` VALUES (9, '你到底想做什么~', 21, '2023-01-11 11:01:53', '2023-01-11 11:01:53');
INSERT INTO `moment` VALUES (10, '晚上喝酒吗~', 21, '2023-01-11 11:02:00', '2023-01-12 12:23:51');
INSERT INTO `moment` VALUES (11, 'hello~', 21, '2023-01-11 11:02:21', '2023-01-11 11:02:21');

-- ----------------------------
-- Table structure for moment_label
-- ----------------------------
DROP TABLE IF EXISTS `moment_label`;
CREATE TABLE `moment_label`  (
  `moment_id` int NOT NULL,
  `label_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`moment_id`, `label_id`) USING BTREE,
  INDEX `label_id`(`label_id`) USING BTREE,
  CONSTRAINT `moment_label_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_label_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of moment_label
-- ----------------------------
INSERT INTO `moment_label` VALUES (1, 7, '2023-01-11 20:15:43', '2023-01-11 20:15:43');
INSERT INTO `moment_label` VALUES (1, 10, '2023-01-11 20:15:43', '2023-01-11 20:15:43');
INSERT INTO `moment_label` VALUES (8, 2, '2023-01-11 20:13:58', '2023-01-11 20:13:58');
INSERT INTO `moment_label` VALUES (8, 3, '2023-01-11 20:13:58', '2023-01-11 20:13:58');
INSERT INTO `moment_label` VALUES (8, 7, '2023-01-11 20:13:57', '2023-01-11 20:13:57');
INSERT INTO `moment_label` VALUES (8, 8, '2023-01-11 20:13:58', '2023-01-11 20:13:58');
INSERT INTO `moment_label` VALUES (8, 9, '2023-01-11 20:13:58', '2023-01-11 20:13:58');
INSERT INTO `moment_label` VALUES (9, 7, '2023-01-12 12:39:22', '2023-01-12 12:39:22');
INSERT INTO `moment_label` VALUES (9, 11, '2023-01-12 12:39:22', '2023-01-12 12:39:22');
INSERT INTO `moment_label` VALUES (10, 2, '2023-01-11 20:10:28', '2023-01-11 20:10:28');
INSERT INTO `moment_label` VALUES (10, 3, '2023-01-11 20:10:28', '2023-01-11 20:10:28');
INSERT INTO `moment_label` VALUES (10, 7, '2023-01-11 20:10:28', '2023-01-11 20:10:28');
INSERT INTO `moment_label` VALUES (10, 8, '2023-01-11 20:10:28', '2023-01-11 20:10:28');
INSERT INTO `moment_label` VALUES (10, 9, '2023-01-11 20:10:28', '2023-01-11 20:10:28');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `avatar_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'bright1', '123456', NULL, '2023-01-10 14:05:44', '2023-01-10 21:33:48');
INSERT INTO `user` VALUES (3, 'hello', '123456', NULL, '2023-01-10 14:09:26', '2023-01-10 14:09:26');
INSERT INTO `user` VALUES (4, 'haha', '123456', NULL, '2023-01-10 14:10:04', '2023-01-10 14:10:04');
INSERT INTO `user` VALUES (5, 'yoyo', '123456', NULL, '2023-01-10 17:04:49', '2023-01-10 17:04:49');
INSERT INTO `user` VALUES (6, 'yoyo1', '123456', NULL, '2023-01-10 17:06:05', '2023-01-10 17:06:05');
INSERT INTO `user` VALUES (7, 'yoyo11', '123456', NULL, '2023-01-10 17:06:55', '2023-01-10 17:06:55');
INSERT INTO `user` VALUES (8, 'yoyo111', '123456', NULL, '2023-01-10 17:07:37', '2023-01-10 17:07:37');
INSERT INTO `user` VALUES (9, 'yoyo1111', '123456', NULL, '2023-01-10 17:07:52', '2023-01-10 17:07:52');
INSERT INTO `user` VALUES (10, 'aa', '123456', NULL, '2023-01-10 17:22:23', '2023-01-10 17:22:23');
INSERT INTO `user` VALUES (11, 'aa1', 'e10adc3949ba59abbe56e057f20f883e', NULL, '2023-01-10 17:23:04', '2023-01-10 17:23:04');
INSERT INTO `user` VALUES (12, 'aa111', 'e10adc3949ba59abbe56e057f20f883e', NULL, '2023-01-10 17:23:15', '2023-01-10 17:23:15');
INSERT INTO `user` VALUES (13, '嘻嘻', 'e10adc3949ba59abbe56e057f20f883e', NULL, '2023-01-10 17:23:41', '2023-01-10 17:23:41');
INSERT INTO `user` VALUES (14, 'what', '794d7a811f540499084eb96a20a8420ff4ea32dd', NULL, '2023-01-10 17:57:01', '2023-01-10 17:57:01');
INSERT INTO `user` VALUES (15, 'whaat', 'eU16gR9UBJkITrlqIKhCD/TqMt0=', NULL, '2023-01-10 18:12:10', '2023-01-10 18:12:10');
INSERT INTO `user` VALUES (16, 'w', '794d7a811f540499084eb96a20a8420ff4ea32dd', NULL, '2023-01-10 19:38:47', '2023-01-10 19:38:47');
INSERT INTO `user` VALUES (17, 'w9', '794d7a811f540499084eb96a20a8420ff4ea32dd', NULL, '2023-01-10 19:39:33', '2023-01-10 19:39:33');
INSERT INTO `user` VALUES (18, 'ws9', '794d7a811f540499084eb96a20a8420ff4ea32dd', NULL, '2023-01-10 19:40:27', '2023-01-10 19:40:27');
INSERT INTO `user` VALUES (19, 'wsa9', '794d7a811f540499084eb96a20a8420ff4ea32dd', NULL, '2023-01-10 19:40:56', '2023-01-10 19:40:56');
INSERT INTO `user` VALUES (20, 'wsa96', '794d7a811f540499084eb96a20a8420ff4ea32dd', NULL, '2023-01-10 19:41:27', '2023-01-10 19:41:27');
INSERT INTO `user` VALUES (21, 'bright', '794d7a811f540499084eb96a20a8420ff4ea32dd', 'www.t-bright.top:8000/users/avatar/21', '2023-01-10 21:35:29', '2023-01-12 12:19:39');
INSERT INTO `user` VALUES (22, 'test', '794d7a811f540499084eb96a20a8420ff4ea32dd', NULL, '2023-01-11 10:00:32', '2023-01-11 10:00:32');
INSERT INTO `user` VALUES (23, 'mili', '794d7a811f540499084eb96a20a8420ff4ea32dd', NULL, '2023-01-11 10:05:00', '2023-01-11 10:05:00');
INSERT INTO `user` VALUES (24, 'qa', '794d7a811f540499084eb96a20a8420ff4ea32dd', 'www.t-bright.top:8000/users/avatar/24', '2023-01-12 12:14:30', '2023-01-12 12:17:22');

SET FOREIGN_KEY_CHECKS = 1;
