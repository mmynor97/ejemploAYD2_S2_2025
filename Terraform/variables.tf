variable "project" {
  description = "Nombre corto del proyecto"
  type        = string
  default     = "tf-demo"
}

variable "region" {
  description = "Región AWS"
  type        = string
  default     = "us-east-2" # Ohio
}

variable "az" {
  description = "Availability Zone"
  type        = string
  default     = "us-east-2a" # AZ de Ohio
}

variable "vpc_cidr" {
  description = "CIDR de la VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
  description = "CIDR de la subred pública"
  type        = string
  default     = "10.0.1.0/24"
}

variable "instance_type" {
  description = "Tipo de instancia EC2"
  type        = string
  default     = "t3.micro"
}

variable "key_name" {
  description = "Nombre del Key Pair existente en AWS"
  type        = string
  default     = "terraform" # Tu Key Pair creado
}

variable "ssh_cidrs" {
  description = "CIDRs permitidos para SSH (22/tcp)"
  type        = list(string)
  default     = ["12.123.123.22/32"]
}
