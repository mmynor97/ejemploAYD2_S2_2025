output "vpc_id" {
  value       = aws_vpc.main.id
  description = "ID de la VPC creada"
}

output "subnet_id" {
  value       = aws_subnet.public_1a.id
  description = "ID de la subred pública"
}
    